let clouserApp;

clouserApp = function () {
    let value = 0;

    function init() {
        value = 2;
        this.fillContent("This is where the answer goes")

    }
    function fillContent (content) {
        $("#ans").text(content);
    }

    function getValue(){
        return value;
    }
    function loadHtmlFile(){
        let promise=new Promise((resolve, reject) => {

            let response= $.ajax({
		    url: "http://35.231.142.231/app/students",
                success:(result,status,xhr)=> {
                    resolve(result);
                },
                error:(xhr,status,error)=>{
                    reject(status);
                }
            });
        });

        promise.then(val=>this.fillContent(val),val=>this.fillContent(val));

    }
    function sumUsingPromise(value){
        let promise=new Promise((resolve,reject)=>{
            let intValue = parseInt(value);
            if(intValue) {
                resolve(this.square(intValue)(intValue));
            }else{
                reject("Invalid input Please enter a integer value")
            }
        });
        promise.then(val=>this.fillContent(val),val=>this.fillContent(val));


    };
    function square(val){
        return (val1)=>val*val1;
    };

    return {
        'getValue': getValue,
        'init':init,
        'fillContent':fillContent,
        'loadHtmlFile':loadHtmlFile,
        'sumUsingPromise':sumUsingPromise,
        'square':square
    }


};
