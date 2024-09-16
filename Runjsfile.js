// for(let i=0;i<10;i++)
// {
//     console.log("hello wwelcome to node ");
// }

// ignoree first two argument
const args=process.argv.slice(3);  // this is the use of process means we can pass arguement to the node 
for(let arg of args)
{
    console.log(`hello ${arg}`);
}