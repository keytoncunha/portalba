export default class Style{
    
    static estilo =
    "header{"+
        "width: 100%;"+
        "display: flex;"+
        "align-items: center;"+
        "justify-content: space-between;"+
        "background-color: var(--cor1);"+
        "color: var(--cor5);"+
        "padding: 0px 20px;"+
    "}"+
    "header h1{"+
        "font-family: var(--font2);"+
    "}"+
    "nav a{" +
        "color: var(--cor5);" +
        "text-decoration: none;" +
    "}" +
    "nav a:hover{" +
        "text-decoration: underline;" +
    "}" +
    "@media screen and (max-width: 768px) {" +
        "header{" +
            "height: 60px;" +
        "}" +
        ".menuNone{" +
            "display: none;" +
        "}" +
        "nav{" +
            "width: 60%;" +
            "position: absolute;" +
            "top: 0px;" +
            "right: 0px;" +
            "display: flex;" +
            "flex-direction: column;" +
            "align-items: center;" +
            "gap: 30px;" +
            "background-color: var(--cor3);" +
            "color: var(--cor5);" +
            "padding: 30px 0px;" +
            "box-shadow: -9px 8px 11px rgba(0, 0, 0, 0.205);" +
            "z-index: 1;" +
        "}" +
        "#burguer, #close{" +
            "font-size: 2rem;" +
            "cursor: pointer;" +
        "}" +
        "#close{" +
            "position: absolute;" +
            "top: 10px;" +
            "right: 10px;" +
        "}" +
    "}" +
    "@media screen and (min-width: 768px) {" +
        "nav{" +
            "width: 70%;" +
            "display: flex;" +
            "align-items: center;" +
            "justify-content: space-evenly;" +
        "}" +
        "#close, #burguer{" +
            "display: none;" +
        "}" +
    "}" +
    "@media screen and (min-width: 768px) and (max-width: 992px) {" +
        "header{" +
            "height: 70px;" +
        "}" +
    "}" +
    
    "@media screen and (min-width: 992px) {" +
        "header{" +
            "height: 75px;" +
        "}" +
    "}" 
}