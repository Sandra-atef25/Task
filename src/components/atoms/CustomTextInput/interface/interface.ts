
export interface textInputProps{
    textLabel:string,
    placeholder:string,
    value:string,
    inputHandler:(text: string) => void,
    password?:boolean,
    isInvalid?:boolean,
    handleBlur?:(e:any)=>void,
}