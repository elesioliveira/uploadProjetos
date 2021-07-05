setTimeout(function() {
    $('#containerA').parallax({imageSrc:'parallax/parallax1.jpg'})
    $('#containerB').parallax({imageSrc:'parallax/parallax2.jpg'})
    $('#containerC').parallax({imageSrc:'parallax/parallax3.jpg'})
 }, 250);

 window.sr = ScrollReveal ();
 sr.reveal ('.navbar',{
     duration : 2000,
     origin:'bottom'
 });

 sr.reveal ('.pessoais',{
     duration:2500,
     origin:'top',
     distance:'300px'
 });
 sr.reveal ('.pessoais',{
    duration:2500,
    origin:'top',
    distance:'300px'
});

 sr.reveal ('.nocoes',{
    duration:3000,
    origin:'top',
    distance:'300px'
});

sr.reveal ('.sobreMim',{
    duration:4000,
    origin:'left',
    distance:'300px'
});

sr.reveal ('.resumoEu',{
    duration:5000,
    origin:'rigth',
    distance:'400px'
});