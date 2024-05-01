$('.flyout-trigger').click((e) => {
    let pressed = $(e.target).attr('aria-pressed') === 'true';
    
    $(e.target).attr('aria-pressed', `${!pressed}`);
    
    $('.flyout').toggleClass('open');
  });