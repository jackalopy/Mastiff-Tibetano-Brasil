import bla from 'dragdealer';

export default class Gallery {
    constructor() {
        this.initMobile();
        this.initDesk();
    }
    
    initMobile() {
        let galleries = $('.gallery');
        let Dragdealer = bla.Dragdealer;
        this.draggers = [];
        let that = this;
        galleries.each(function() {
            
            let thatGallery = this;
            let dragger = new Dragdealer($(this).attr('id'), {
                steps: $(this).find('.slide').length,
                speed: 0.3,
                loose: true,
                requestAnimationFrame: true,
                callback: function(x,y) {
                    let step = dragger.getStep()[0];
                    $(thatGallery).parent().find('.buttons').find('.button').each(function() {
                        console.log($(this));
                        if($(this).attr('value') == step) {
                            $(this).addClass('active');
                        } else {
                            $(this).removeClass('active');
                        }
                    });
                }
            });
            
            that.draggers.push(dragger);
            
            let buttons = $('<div class="buttons"></div>');
            let galleryLength = $(this).find('.slide').length;
            for(var i = 1; i <= galleryLength; i++) {
                let button = $('<div class="button button' + i + (i == 1? ' active' : '' ) + '" value="' + i +'"></div>');
                button.on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    dragger.setStep($(this).attr('value'));
                    console.log($(this).attr('value'));
                });
                buttons.append(button);
            }
            
            $(this).parent().append(buttons);
        });
    }
    
    initDesk() {
        let galleries = $('#section4').find('.content.desk-only').find('.dog');
        let position = 0;
        let size = galleries.length;
        
        console.log(galleries);
        
        galleries.each(function() {
            $(this).find('.background').on('click', function() {
                nextStep();
            });
            
        });
        
        let firstBack = $('<div class="firstBackground"></div>');
        let lastBack = $('<div class="lastBackground"></div>');
        
        $(galleries).first().css({
            'border-left': 'solid 4px #fff'
        });
        
        $(galleries).last().css({
            'border-right': 'solid 4px #fff'
        });
        
        
        firstBack.css({
            'display': 'inline-block',
            'width': '90px',
            'height': '100%',
            'margin-right': '-90px',
            'z-index': '-1',
            'background-image': $(galleries).last().find('.background').css('background-image'),
            'background-size': 'auto 100%',
            'background-position': 'top right',
            'cursor': 'pointer',
        }).on('click', function() {
            setStep(size -1);
        });
        
        lastBack.css({
            'display': 'inline-block',
            'width': '90px',
            'height': '100%',
            'margin-right': '-90px',
            'z-index': '-1',
            'background-image': $(galleries).first().find('.background').css('background-image'),
            'background-size': 'auto 100%',
            'background-position': 'top left',
            'cursor': 'pointer',
        }).on('click', function() {
            setStep(0);
        });
        
        $(galleries).parent().prepend(firstBack);
        $(galleries).parent().append(lastBack);
        
        setStep(0);
        
        function nextStep() {
            setStep(position + 1);
        }
        
        function setStep(newStep) {
            console.log('setting step to ' + newStep);
            position = newStep % size;
            animationCtrl.css(galleries[0], {
                'margin-left': 'calc(' + (-100 * position) + '% + ' + (90 * (position)) + 'px)'
            }, .8);
            console.log('uhn...');
        }
    }
    
}