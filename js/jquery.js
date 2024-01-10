$(document).ready(function(){
    // TOGGLE

    $(".toggle").click(function(){
        $("nav").slideToggle();
    });

    // THEME-SWITCHER

    $(document).ready(function(){

      $(".theme-icon").click(function(){
        $(".theme-switch").toggleClass("slide-left");
      });

      $('.theme-switch ul li').click(function(){
     var text =  $(this).css("background-color");
      $(':root').css("--theme-color" , text);
      });

    })

});

	// HEADLINE

    const cursor = document.getElementById("cursor-blink");
    const changeling = document.getElementById("changeling");
    const wordArray = ["I'm Dhruti Bhuva", 
                       "I'm Developer",
                       "I'm Designer",
                       "I'm Freelancer"];
    var wordIndex = 0;
    var letterIndex = 0;
    var displayString = '';
    var wordComplete = false;
    var wordTypeInterval = 110;
    var timeDelayRounds = 17;
    
    function typeWord() {
      var currentWord = wordArray[wordIndex];
      if (!wordComplete) { // begin writing word
        if (letterIndex < currentWord.length) {
          displayString += currentWord[letterIndex];
          changeling.innerHTML = displayString;
          letterIndex++;
        } // this 'else if' is here to waste time so there
          // is some delay before the word is erased
         else if (letterIndex < currentWord.length + timeDelayRounds) {
          letterIndex++;
        } else {
          letterIndex -= timeDelayRounds; // makes up for wasted time
          wordComplete = true;
        }
      } else { // begin deleting word
        if (letterIndex > 0) {
          displayString = displayString.slice(0, letterIndex - 1);
          changeling.innerHTML = displayString;
          letterIndex--;
        } else { // once word is deleted, go to next word
          wordComplete = false;
          if (wordIndex === wordArray.length - 1) {
            wordIndex = 0;
          } else {
            wordIndex++;
          }
        }
      }
    }
    
    function cursorBlink() {
      if (cursor.style.opacity === '0') {
        cursor.style.opacity = '1';
      } else {
        cursor.style.opacity = '0';
      }
    }
    
    // setInterval(cursorBlink, 375);
    setInterval(typeWord, wordTypeInterval);


    $('.filters ul li').click(function(){
      $('.filters ul li').removeClass('active');
      $(this).addClass('active');
      
      var data = $(this).attr('data-filter');
      $grid.isotope({
        filter: data
      })
    });
    
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all"
      }
    })
    