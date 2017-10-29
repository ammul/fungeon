var SwipeService = {

    swipe: null,

    init: function(){

        this.swipe = new Swipe(game);

    },

    checkSwipe: function(){

        var direction = this.swipe.check();
        if (direction!==null&&!this.isAttacking) {
            // direction= { x: x, y: y, direction: direction }
            switch(direction.direction) {
//                case this.swipe.DIRECTION_LEFT:
                case this.swipe.DIRECTION_RIGHT:
//                case this.swipe.DIRECTION_UP:
//                case this.swipe.DIRECTION_DOWN:
//                case this.swipe.DIRECTION_UP_LEFT:
                case this.swipe.DIRECTION_UP_RIGHT:
                    console.log("up right");
                    this.attack();
                    break;
//                case this.swipe.DIRECTION_DOWN_LEFT:
//                case this.swipe.DIRECTION_DOWN_RIGHT:
            }
        }

    }

}
