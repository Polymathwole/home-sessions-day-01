const dataTypes=(argument)=>
{
    if ((argument===null)||(argument===undefined)||(argument===Infinity))
        return "no value";
    else if (typeof argument==="string")
        return argument.length;
    else if (typeof argument==="boolean")
        return argument;
    else if (typeof argument==="number")
        {
            if (argument!==100)
                return argument < 100 ? "less than 100" : "more than 100";
            else
                return "equal to 100";
        }
    else if (argument.forEach)
        {
            if (argument.length<3)
                return undefined;
            else
                return argument[2];
        }
    else if (typeof argument==="function")
        {
            return argument(true)
        }
}


const callback=(x)=>
{
    return "called callback";
}