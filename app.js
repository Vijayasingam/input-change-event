let incr = 0;
function updateValue(){
    $('#text1').val(++incr).change();
}
function fireCustomEvt(element,evtType){
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(evtType, true, true);
        element.dispatchEvent(evt);
    }
    else
        element.fireEvent("on"+evtType);
}
function updateValueJS(){
    let element = document.getElementById('text1');
    element.value = ++incr;
    fireCustomEvt(element,'change');
}
$("body").on( "change", "#text1", function() {
  $('#text2').val($('#text1').val());
});