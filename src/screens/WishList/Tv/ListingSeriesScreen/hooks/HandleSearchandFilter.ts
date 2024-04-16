import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { TvProps } from "../../../../../models/Tv";
import { favorites } from "../../../../../store/FavoritesContext/FavoritesContext";
import { retrieveData } from "../../../../../utils/AsyncStorage";
export const useSearchandFilterHandle = () => {
  
  const [fetchedFavoriteSeries, setFetchedFavoriteSeries] = useState<TvProps[]>();
  const [selectedId, setSelectedId] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [noMatchingSeries, setNoMatchingSeries] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const isFocused = useIsFocused();

  const useFavorites = useContext(favorites);
  const handleClearSearch=()=>{
    setSearchText('');
    Keyboard.dismiss();
  }
  
  const getFavorites = async () => {
    try {
      // Retrieve the favorite movies from AsyncStorage
    
      const existingWishlist = await retrieveData('@FavoriteSeries');
      const favoriteSeries: TvProps[] = existingWishlist ? existingWishlist : [];
      return favoriteSeries;

    } catch (error) {
      console.error('Error retrieving wishlist:', error);
    
    }
  };
  
  let matchingSeries:TvProps []=new Array<TvProps>;
  const fetchFavorites = async () => {
    setIsFetching(true);
    const favoriteSeries = await getFavorites();
    setIsFetching(false);
    if (favoriteSeries) {
      setNoMatchingSeries(false);
      setFetchedFavoriteSeries(favoriteSeries);
    } else {
      setNoMatchingSeries(true);
      setFetchedFavoriteSeries([]);
    }
    
  };
  useEffect(() => {
    if (isFocused) {
      fetchFavorites();
    }
  }, [isFocused, useFavorites.favoritesData]);//reduxSlice]);
  const handleClearFilter = () => {
    setSelectedId([]);
  }
  
  useEffect(() => {
    if (selectedId.length == 0) {
      if (searchText.trim().length == 0) {
        fetchFavorites();
      }
      else {
        
        const searchSeries = fetchedFavoriteSeries?.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        
        if (searchSeries.length == 0) {
          setFetchedFavoriteSeries([]);
          setNoMatchingSeries(true);
        }
        else {
          setFetchedFavoriteSeries(searchSeries);
          setNoMatchingSeries(false);
        }
      }

    }

    else {
      //check if more than an id is selected so
      // return all movies including in his genres ids thoses selected id 
      matchingSeries = fetchedFavoriteSeries.filter((series) =>
        selectedId.every((genreID) => series.genre_ids.includes(genreID)));
      if (searchText.trim().length === 0) {

       
        if (matchingSeries?.length === 0) {
          setNoMatchingSeries(true);
        }
        else {
          setFetchedFavoriteSeries(matchingSeries);
          setNoMatchingSeries(false);
        }

      }

      else {
        
        const searchSeries = matchingSeries?.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        if (searchSeries.length == 0) {
          setFetchedFavoriteSeries(matchingSeries);
          setNoMatchingSeries(true);
        }
        else {
          setFetchedFavoriteSeries(searchSeries);
          setNoMatchingSeries(false);
        }
      }
    }
  }, [selectedId, searchText]);
  return{
    handleClearFilter,
    handleClearSearch,
    selectedId,
    searchText,
    fetchedFavoriteSeries,
    isFetching,
    noMatchingSeries,
    setSelectedId,
    setSearchText

  }
};