/**
 * Created by Administrator on 2016/6/28.
 */
var http=require("http");
var url=require("url");

/*var page='<!DOCTYPE html>\
    <html lang="en">\
    <head>\
    <meta charset="UTF-8">\
    <title>add_form_get</title>\
    </head>\
    <body>\
    <form method="post" action="/op">\
    <label for="op">op</label>\
    <select id="op" name="op"  >\
    <option>add</option>\
    <option>subtract</option>\
    <option>multiply</option>\
    <option>divide</option>\
    </select><br>\
    <label for="first">a:</label>\
<input type="text" id="first" name="a" ><br>\
    <label for="second">b:</label>\
<input type="text" id="second" name="b" ><br>\
    <input type="submit" value="submit">\
    </form>\
    </body>\
    </html>';*/

var page = '<!DOCTYPE html>                                 \
    <html lang="en">                                        \
    <head>                                                  \
    <meta charset="UTF-8">                                  \
    <title>add_form_get</title>                             \
    </head>                                                 \
    <body>                                                  \
        <form method="post" action="/op">                   \
            <label for="op">op</label>                      \
            <select id="op" name="op">                      \
                <option>add</option>                        \
                <option>subtract</option>                   \
                <option>multiply</option>                   \
                <option>divide</option>                     \
            </select><br>                                   \
            <label for="first">a:</label>                   \
            <input type="text" id="first" name="a" ><br>    \
            <label for="second">b:</label>                  \
            <input type="text" id="second" name="b" ><br>   \
            <input type="submit" value="submit">            \
        </form>                                             \
    </body>                                                 \
    </html>';

http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var a=urlObj.query.a;
    var b=urlObj.query.b;
    var operation=urlObj.query.op;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    var result=0;
    if("/favicon.ico"==urlObj.pathname){
           // return;
    }else if("/"==urlObj.pathname){
        console.log("index page");
        res.end(page);
    }else if('/op'==urlObj.pathname){
        //console.log("hello");

        switch (operation){
            case 'add':
                result=a+b;
                break;
            case "subtract":
                result=a-b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                result = a / b;
                break;
            default :
                console.error("op is wrong");
        }
        result=result.toString();
        res.end(result);
    }
}).listen(3000);