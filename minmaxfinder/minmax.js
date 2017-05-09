const findMinMax = (elements)=>
{
    let numberOfElements=elements.length;

    let minimum = elements[0];
    let maximum = elements[numberOfElements-1];

    for (let each=0;each<numberOfElements;each+=2)
        {
            if (elements[each+1]===undefined)//to cater for odd number length arrays
                {
                    if (elements[each]<minimum)
                        minimum=elements[each];
                    
                    if (elements[each]>maximum)
                        maximum=elements[each];
                }

            if(elements[each]<elements[each+1])
                {
                    if (elements[each]<minimum)
                        minimum=elements[each];

                    if (elements[each+1]>maximum)
                        maximum=elements[each+1];
                }     
            else if (elements[each]>elements[each+1])
                {
                    if (elements[each]>maximum)
                        maximum=elements[each];

                    if (elements[each+1]<minimum)
                        minimum=elements[each+1];
                }
                
        }

        if (minimum===maximum)
            return [minimum];
        else
            return [minimum,maximum];
}