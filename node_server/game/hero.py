class Hero:
    def moveLeft(self, steps=1):
        print( ''.join(['L' for _i in range(steps)]))
    
    def moveRight(self, steps=1):
        print( ''.join(['R' for _i in range(steps)]))
    
    def moveUp(self, steps=1):
        print( ''.join(['U' for _i in range(steps)]))
    
    def moveDown(self, steps=1):
        print( ''.join(['D' for _i in range(steps)]))
    def attack(self):
        print('A')
