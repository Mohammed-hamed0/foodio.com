window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0) 
});


function togglemenu(){
    const menutoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}





// @media (max-width: 991px) {
//     header,
//     header.stiky
//     {
//         padding: 10px 20px;
//     }
//     header .navigation
//     {
//         display: none;
//     }
//     header .navigation.active{
//         width: 100%;
//         height: calc(100px - 68px);
//         position: fixed;
//         top: 68px;
//         left: 0;
//         display: flex;
//         justify-content: center;
//         flex-direction: column;
//         background: #fff;
//     }
//     header .navigation li {
//         margin-left: 0;

//     }
//     header .navigation li a{
//         text-decoration: none;
//         color: #111;
//         font-size: 1.6em;
//         font-weight: 300;
//     }
//     .menutoggle
//     {
//         position: relative;
//         width: 40px;
//         height: 40px;
//         background: url(menu.png);
//         background-size: 30px;
//         background-repeat: no-repeat;
//         background-position: center;
//         cursor: pointer;
//     }
//     .menutoggle.active{
//         background: url(close.png);
//         background-size: 25px;
//         background-repeat: no-repeat;
//         background-position: center;
//     }
//     header.stiky .menutoggle{
//         filter: invert(1);
//     }
//     section{
//         padding: 20px;
//     }
//     .banner .content h2{
//         font-size: 3em;
//         color: #fff;
//     }
//     .row{
//         flex-direction: column;
//     }
//     .row .col50{
//         position: relative;
//         width: 48%;
//     }
//     .row .col50 .imgbx{
//         height: 300px;
//         margin-top: 20px;
//     }
//     .menu .content{
//         margin-top: 20px;
//     }
//     .menu .content .box{
//         margin: 10px;;
//     }
//     .menu .contact .box .imgbx{
//         height: 260px;
//     }
//     .title{
//         color: #111;
//         font-size: 1.8em;
//         line-height: 1.5em;
//         margin-bottom: 15px;
//         font-weight: 300;
//         text-align: center;
//     }
// }