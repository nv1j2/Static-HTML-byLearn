window.onload=function ()
{
    var aA=document.getElementById('log_user').getElementsByTagName('a');
    var i=0;
    
    for(i=0;i<aA.length;i++)
    {
        aA[i].iTime=null;
        aA[i].iSpeed=6;
        aA[i].onmouseover=function ()
        {
            goTime(this,30,1);
        }
        aA[i].onmouseout=function ()
        {
            goTime(this,6,-1);
        }
    }
}
function goTime(obj,iTarget,toggle)
{
    if(obj.iTime)
    {
        clearInterval(obj.iTime);
    }
    obj.iTime=setInterval(function()
    {
        if(obj.iSpeed===iTarget)
        {
            clearInterval(obj.iTime);
            obj.iTime=null;
        }
        else
        {
            obj.iSpeed+=2*toggle;
            obj.style.paddingLeft=obj.iSpeed+'px';
            obj.style.paddingRight=obj.iSpeed+'px';
        }
        
    },30);
}