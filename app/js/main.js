$(function () {

  //Валидатор форм и маска для форм
  const paymentForm = $('.payment-main-right')
  paymentForm.submit(function (e) {
    e.preventDefault()
  })


  $(document).ready(function () {
    $('#cssmenu li.has-sub > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
 
    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
});

  paymentForm.validate({
    errorElement: "",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      tel: {
        maskRu: true
      },
      email: {
        maskEm: true
      }
    },
    messages: {
      name: "",
      lastName: "",
      tel: "",
      email: "",
      country: "",
      city: "",
      index: "",
      street: "",
      house: "",
      apartment: ""
    },
    submitHandler: function (form) {
      const formInstance = $(form)

      console.log('submit')
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: formInstance.serialize()
      }).done(function () {
        console.log('DONE')
        // formInput.val("");
        // formInput.siblings().removeClass('active')
        // $('.modal-wrapper-offer .success-message').addClass('show')
      });
      return false;
    }
  });

  const contactForm = $('.contact-question__form')
  contactForm.submit(function (e) {
    e.preventDefault()
  })

  contactForm.validate({
    errorElement: "",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      email: {
        maskEm: true
      }
    },
    messages: {
      name: "",
      email: "",
      message: ""
    },
    submitHandler: function (form) {
      const formInstance = $(form)
      console.log('submit')
      $.ajax({
        url: "../mail.php",
        data: formInstance.serialize()
      }).done(function () {
        console.log('DONE')
        // formInput.val("");
        // formInput.siblings().removeClass('active')
        // $('.modal-wrapper-offer .success-message').addClass('show')
      });
      return false;
    }
  });

  const passwordForm = $('.password-form')
  passwordForm.submit(function (e) {
    e.preventDefault()
  })

  passwordForm.validate({
    errorElement: "",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      email: {
        maskEm: true
      }
    },
    messages: {
      email: "",
    },
    submitHandler: function (form) {
      const formInstance = $(form)
      console.log('submit')
      $.ajax({
        // url: "../mail.php",
        // data: formInstance.serialize()
      }).done(function () {
        console.log('DONE')
        // formInput.val("");
        // formInput.siblings().removeClass('active')
        // $('.modal-wrapper-offer .success-message').addClass('show')
      });
      return false;
    }
  });

  jQuery.validator.addMethod('maskRu', function (value, element) {
    console.log(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value));
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });

  jQuery.validator.addMethod('maskEm', function (value, element) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  });

  $('[name="tel"]').mask("+7(999)999-9999", {
    autoclear: false
  });

  $(window).on('resize', function (e) {
    var init = $(".product-left").data('init-slider');
    if (window.innerWidth < 992) {
      if (init != 1) {
        $('.product-left').slick({
          arrows: false,
          dots: true
        }).data({
          'init-slider': 1
        });
      }
    } else {
      if (init == 1) {
        $('.product-left').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');

});

$('document').ready(function () {
  $('.btn--payment').on('click', function () {
    $('.sign-up__input--payment').addClass('req');
  });
});

//Модальные окна на Pure Js
(function () {

  //Вызов окна колбека
  openRestore = document.querySelector('.openRestore');
  restoreModal = document.querySelector('.modal-wrapper__restore');

  openRestore.addEventListener('click', function () {
    openBaseModal();
    restoreModal.classList.remove('hidden');
    setTimeout(function () {
      restoreModal.classList.remove('animation');
    }, 20);
  })

  function closeRestorePopup() {
    if (!restoreModal.classList.contains('hidden')) {
      restoreModal.classList.add('animation');
      restoreModal.addEventListener('transitionend', function (e) {
        restoreModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openError = document.querySelector('.openError');
  errorModal = document.querySelector('.modal-wrapper__error');

  openError.addEventListener('click', function () {
    openBaseModal();
    errorModal.classList.remove('hidden');
    setTimeout(function () {
      errorModal.classList.remove('animation');
    }, 20);
  })

  function closeErrorPopup() {
    if (!errorModal.classList.contains('hidden')) {
      errorModal.classList.add('animation');
      errorModal.addEventListener('transitionend', function (e) {
        errorModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  //Вызов окна колбека
  openLeftMenu = document.querySelector('.openMenu');
  leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

  openLeftMenu.addEventListener('click', function () {
    openBaseModal();
    leftMenuModal.classList.remove('hidden');
    setTimeout(function () {
      leftMenuModal.classList.remove('animation');
    }, 20);
  })

  function closeleftMenuModal() {
    if (!leftMenuModal.classList.contains('hidden')) {
      leftMenuModal.classList.add('animation');
      leftMenuModal.addEventListener('transitionend', function (e) {
        leftMenuModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openSignUp = document.querySelector('.openSignUp');
  signUpModal = document.querySelector('.modal-wrapper__sign-up');

  openSignUp.addEventListener('click', function () {
    openBaseModal();
    signUpModal.classList.remove('hidden');
    setTimeout(function () {
      signUpModal.classList.remove('animation');
    }, 20);
  })

  function closeSignUpModal() {
    if (!signUpModal.classList.contains('hidden')) {
      signUpModal.classList.add('animation');
      signUpModal.addEventListener('transitionend', function (e) {
        signUpModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openCheck = document.querySelector('.openCheck');
  checkModal = document.querySelector('.modal-wrapper__check');

  openCheck.addEventListener('click', function () {
    closeSignUpModal();
    checkModal.classList.remove('hidden');
    setTimeout(function () {
      checkModal.classList.remove('animation');
    }, 20);
  })

  function closeCheckModal() {
    if (!checkModal.classList.contains('hidden')) {
      checkModal.classList.add('animation');
      checkModal.addEventListener('transitionend', function (e) {
        checkModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openPassword = document.querySelector('.openPassword');
  passwordModal = document.querySelector('.modal-wrapper__password');

  openPassword.addEventListener('click', function () {
    closeSignUpModal();
    passwordModal.classList.remove('hidden');
    setTimeout(function () {
      passwordModal.classList.remove('animation');
    }, 20);
  })

  function closePasswordModal() {
    if (!passwordModal.classList.contains('hidden')) {
      passwordModal.classList.add('animation');
      passwordModal.addEventListener('transitionend', function (e) {
        passwordModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openCabinet = document.querySelector('.openCabinet');
  cabinetModal = document.querySelector('.modal-wrapper__cabinet');

  openCabinet.addEventListener('click', function () {
    openBaseModal();
    cabinetModal.classList.remove('hidden');
    setTimeout(function () {
      cabinetModal.classList.remove('animation');
    }, 20);
  })

  function closeCabinetModal() {
    if (!cabinetModal.classList.contains('hidden')) {
      cabinetModal.classList.add('animation');
      cabinetModal.addEventListener('transitionend', function (e) {
        cabinetModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openFavorites = document.querySelector('.openFavorites');
  favoritesModal = document.querySelector('.modal-wrapper__favorites');

  openFavorites.addEventListener('click', function () {
    openBaseModal();
    favoritesModal.classList.remove('hidden');
    setTimeout(function () {
      favoritesModal.classList.remove('animation');
    }, 20);
  })

  function closeFavoritesModal() {
    if (!favoritesModal.classList.contains('hidden')) {
      favoritesModal.classList.add('animation');
      favoritesModal.addEventListener('transitionend', function (e) {
        favoritesModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  openBasket = document.querySelectorAll('.openBasket');
  basketModal = document.querySelector('.modal-wrapper__basket');

  for (let i = 0; i < openBasket.length; i++) {
    openBasket[i].addEventListener('click', () => {
      openBaseModal();
      basketModal.classList.remove('hidden');
      setTimeout(function () {
        basketModal.classList.remove('animation');
      }, 20);
    });
  }

  function closeBasketModal() {
    if (!basketModal.classList.contains('hidden')) {
      basketModal.classList.add('animation');
      basketModal.addEventListener('transitionend', function (e) {
        basketModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };
  openEmptyBasket = document.querySelector('.openEmptyBasket');
  emptyBasketModal = document.querySelector('.modal-wrapper__empty-basket');

  openEmptyBasket.addEventListener('click', function () {
    openBaseModal();
    emptyBasketModal.classList.remove('hidden');
    setTimeout(function () {
      emptyBasketModal.classList.remove('animation');
    }, 20);
  })

  function closeEmptyBasketModal() {
    if (!emptyBasketModal.classList.contains('hidden')) {
      emptyBasketModal.classList.add('animation');
      emptyBasketModal.addEventListener('transitionend', function (e) {
        emptyBasketModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  function closeAllModal() {
    closeRestorePopup();
    closeErrorPopup();
    closeleftMenuModal();
    closeSignUpModal();
    closeCheckModal();
    closePasswordModal();
    closeCabinetModal();
    closeFavoritesModal();
    closeBasketModal();
    closeEmptyBasketModal();
    closeBaseModal();
  };

  //База модальных окон
  body = document.querySelector('body');
  modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapperBg = document.querySelector('.modal-wrapper__bg');
  modalWrapperClose = document.querySelectorAll('.modal-wrapper__close');

  function openBaseModal() {
    body.classList.add('noflow');
    modalWrapper.classList.remove('hidden');
    setTimeout(function () {
      modalWrapper.classList.remove('animation');
    }, 20);
  };

  function closeBaseModal() {
    body.classList.remove('noflow');
    modalWrapper.classList.add('animation');
    modalWrapper.addEventListener('transitionend', function (e) {
      modalWrapper.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  };

  for (let i = 0; i < modalWrapperClose.length; i++) {
    modalWrapperClose[i].addEventListener('click', () => {
      closeAllModal();
    });
  }

  modalWrapperBg.addEventListener('click', function () {
    closeAllModal();
  })

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {
      closeAllModal();
    }
  };

})();