$(document).ready(() => {
  $('.replayQuestion').on('click', function(e){
    e.preventDefault();
    $('.replyAnswer').removeClass('d-none');
    $('.replyAnswer').addClass('d-flex');
  });
  $('.cancelReply').on('click', function(e){
    e.preventDefault();
    $('.replyAnswer').removeClass('d-flex');
    $('.replyAnswer').addClass('d-none');
  });

  $('.viewExpand').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.modal-footer').toggleClass('d-none');
  })
});