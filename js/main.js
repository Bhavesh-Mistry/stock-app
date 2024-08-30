$( document ).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#sidebarCollapse').on('click', function () {
      $(this).toggleClass('active');
      $('#sidebar').toggleClass('active');
  });
        
});

