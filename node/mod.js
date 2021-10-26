//var url='http';
console.log(__dirname);
console.log(__filename);
function callf(name)
{
    console.log(name);
}
//We can use this for exporting the module as a function only
//we can create an object and call the object also
module.exports=callf;