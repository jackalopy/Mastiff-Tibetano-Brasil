export default class Menu {
    constructor(menuClass = 'menu', mobileMenu = 'mobile-menu', menuButton = 'menu-btn', toSectionClass = 'toSection', sectionClass = 'section') {
        this.menuClass = menuClass;
        this.mobileMenuClass = mobileMenu;
        this.menuButtonClass = menuButton;
        this.toSectionClass = toSectionClass;
        this.sectionClass = sectionClass;
        this.state;
        this.init();
    }
    
    init() {
        let that = this;
        this.menu = $('.' + this.menuClass);
        this.mobileMenu = $('.' + this.mobileMenuClass);
        this.menuButton = $('.' + this.menuButtonClass);
        this.sections = $('.' + this.sectionClass);
        this.sectionsLength = this.sections.length;
        let dots = $('<div class="dots"></div>');
        
        console.log('initializing menu');
        console.log(this.sections);
        console.log(this.menu);
        
        for(let i = 0; i < this.sectionsLength; i++) {
            let dot = $('<div class="dot ' + this.toSectionClass + '" menu_value="' + (i + 1) + '"></div>');
            let hover = $('<div class="hover toAppear"></div>')
                .text($('#' + this.sectionClass + (i + 1)).attr('menu_title'));
                
                dot.append(hover);
                dot.hover(function() {
                    $(this).find('.hover').addClass('appeared');
                }, function() {
                    $(this).find('.hover').removeClass('appeared');
                });
                
            dots.append(dot);
        }
        
        this.menu.append(dots);
        let links = this.mobileMenu.find('.links');
        
        for(let i = 0; i < this.sectionsLength; i++) {
            let link = $('<li class="link ' + this.toSectionClass + '" menu_value="' + (i + 1) + '"></li>');
            link.text($('#' + this.sectionClass + (i + 1)).attr('menu_title'));
            
            links.append(link);
        }
        
        $('.' + this.toSectionClass).on('click', function() {
            console.log($(this));
            console.log($(this).attr('menu_value'));
            console.log('#' + that.sectionClass + $(this).attr('menu_value'));
            
            viewportCtrl.scrollTo( $('#' + that.sectionClass + $(this).attr('menu_value')) );
            that.close();
        });
        
        this.menuButton.on('click', function() {
            that.toggleState();
        });
        
        this.close();
    }
    
    open() {
        this.state = "OPEN";
        this.mobileMenu.addClass('open');
        this.menuButton.addClass('active');
    }
    
    close() {
        this.state = "CLOSE";
        this.mobileMenu.removeClass('open');
        this.menuButton.removeClass('active');
    }
    
    toggleState() {
        switch(this.state) {
            case "OPEN":
                this.close();
                break;
            case "CLOSE":
                this.open();
                break;
        }
    }
};