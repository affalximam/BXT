$(function() {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});



// When the user scrolls down 20px
window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    $('#myBtn').css({
      'display': 'block'
    });
    $('#navbar').css({
      'background': '#000'
    });
  } else {
    $('#myBtn').css({
      'display': 'none'
    });
    $('#navbar').css({
      'background': 'transparent'
    });
  }
};


// $('.page-scrool').on('click', function() {

//   // ambil isi href
//   var tujuan = $(this).attr('href');

//   // ambil element yang bersangkutan
//   var elemenTujuan = $(tujuan);

//   console.log(elemenTujuan.offset().top);

// });


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollabout() {
  document.body.scrollTop = 816;
  document.documentElement.scrollTop = 816;
}


// preload
var overlay = document.getElementById("overlay"); /* untuk mengambil elemen berdasarkan id yang ada id html */

window.addEventListener('load', function() {
  overlay.style.display = 'none';
})
1
2
3
4
5
6
var overlay = document.getElementById("overlay"); /* untuk mengambil elemen berdasarkan id yang ada id html */

window.addEventListener('load', function() {
  overlay.style.display = 'none';
});
// end preload

// aos
(function() {
  AOS.init();
})();
// aos