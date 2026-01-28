let dis = document.getElementById("te")

function clearr()
{
    dis.value="";
}

function delette()
{
    dis.value=dis.value.slice(0,-1);
}

function show(value)
{
    dis.value=dis.value+value;
}

function evval()
{
    try
    {
        dis.value=eval(dis.value);
    }
    catch
    {
dis.value="error";
    }
}