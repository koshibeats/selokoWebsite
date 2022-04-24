#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <time.h>
#include <windows.h>


//int size=10;
#define size 10

char output[size][size], input;
int randomY, randomX, i, j, debugn=0, loop=1, y=0, x=0, apples=0, ypos[size*size], xpos[size*size];
int applern;

void init();
void randXY();
void printfield();
void debug();
void updateXY();
void checkcoll();
void losescreen();

int main(){

    printf("Willkommen zum Snake Game!\nDas Spiel laedt. Bitte warten...\n");


    init();
    randXY();
    Sleep(350);
    system("CLS");

    while (loop==1){

        if(kbhit()){
            input = getch();
        }

        output[y][x]=250;

        switch(input){
            case 'w': y--; break;
            case 'a': x--; break;
            case 's': y++; break;
            case 'd': x++; break;
            case '#': loop=0; break;
            
        }
        checkcoll();

        if(randomY == y && randomX == x){
            applern = 1;
            apples++;
            randXY();

        }
        applern = 0;

        printfield();
        Sleep(250-(apples*2.5));

        if (loop==0){
            break;
        }

        if (loop==2){
            //Sleep(250);
            //printf("Du hast verloren!\n-- Statistics --\nApples eaten: %d\n\nWollen Sie noch einmal spielen?(j/n)",apples, input);
            printf("\nDu hast verloren!\nWollen Sie noch einmal spielen?(j/n)");
            
            Sleep(2000);
            input = getch();
            if (input=='j'){
                init();
                apples=0;
                loop=1;
            }
            else{
            printf("\n\nDanke fuers Spielen!\nDruecken Sie eine beliebige Taste zum schliessen.\n");
            getch();
            break;
            }
        }
    }
}


/*void debug(){
    debugn++;
    printf("test%d, loop: %d", debugn, loop);
    getch();
    system("CLS");
}
*/

void init(){
    int i, j;
    y=0;
    x=0;
     for(i=0;i<size;i++){
        for(j=0;j<size;j++){
            output[i][j] = 250;
        }
    }
    srand(time(NULL));

    for(i=0;i<size*size;i++){
        ypos[i] = 0;
        xpos[i] = 0;
    }
    ypos[0] = 1;
    xpos[0] = 1;
}


void randXY(){
    i=0;
    /*
    RandomX=rand...
    ...Y...
    nochmal=0;
    for (i=0; i<=LAENGEDERSCHLANGE; i++)
        if (RandomX==X[i] && Y...)
        nochmal=1;

    while (nochmal==1);*/

    for(i=0;i<=apples;i++){
        do{
            //printf("\n\nx==ypos=%d i=%d x==xpos=%d last input: %c",ypos[i],xpos[i], i, input);
            randomX = rand() % size;
            randomY = rand() % size;
        
        }
        while(randomY==ypos[i]&&randomX==xpos[i]);
        
    }
    
    /*
    do{
    randomX = rand() % size;
    i++;
    }
    while (randomX==xpos[i]);
    i=0;
    do{
    randomY = rand() % size;
    i++;
        if(i){
                i=0;
                do{
                randomX = rand() % size;
                i++;
                }
                while (randomX==xpos[i]);
        }
    }
    while (randomY==ypos[i]);*/

    output[randomY][randomX]=208;
}


void checkcoll(){
    i=1;
    if(applern==1){

    }
    if(applern==0){
    while (i<=apples){
        if(y==ypos[i]&&x==xpos[i]){

            //printf("\n\nx==ypos=%d i=%d x==xpos=%d last input: %c",ypos[i],xpos[i], i, input);

            loop=2;
        }
        i++;
    }
    if (y>=size){
        //printf("\n\ny>=size");

        loop=2;
    }
    if(y<0){
        //printf("\n\ny<=0");

        loop=2;
    }
    if(x>=size){
        //printf("\n\nx>=size");

        loop=2;
    }
    if(x<0){
        //printf("\n\nx<=0");

        loop=2;
    }

    }
    applern=0;
}

void printfield(){

    for(i=0;i<size;i++){
        for(j=0;j<size;j++){
            output[i][j] = 250;
        }
    }


    system("CLS");
    output[y][x] = 254;
    output[randomY][randomX] = 208;
    ypos[0] = y;
    xpos[0] = x;
    for(i=apples+1;i>0;i--){
        ypos[i] = ypos[i-1];
        xpos[i] = xpos[i-1];
        output[ypos[i]][xpos[i]] = 254;
    }
    printf("-Paul's Snake Game- \n");
    for(i=0;i<size;i++){

        for(j=0;j<size;j++){
            printf("%c ",output[i][j]);
        }
        printf("\n");

    }
    printf("\n--- Statistics: ---\nApples eaten: %d\n",apples);


}


