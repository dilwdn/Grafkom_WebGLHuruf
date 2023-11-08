var vertices = [
    //Huruf W
    -1.2, 0.6, 0.0, //0
    -1.6, 0.6, 0.0, //1
    -1.0, -0.7, 0.0, //2
    -0.8, -0.7, 0.0, //3
    -0.63, -0.3, 0.0,//4
    -0.4, -0.7, 0.0, //5
    -0.2, -0.7, 0.0, //6
    0.2, 0.6, 0.0, //7
    0.0, 0.6, 0.0, //8
    -0.33, -0.4, 0.0, //9
    -0.5, 0.0, 0.0, //10
    -0.7, 0.0, 0.0, //11
    -0.9, -0.4, 0.0, //12

    // //3D
    // //Huruf W
    -1.2, 0.6, -0.25, //13
    -1.6, 0.6, -0.25, //14
    -1.0, -0.7, -0.25, //15
    -0.8, -0.7, -0.25, //16
    -0.63, -0.3, -0.25,//17
    -0.4, -0.7, -0.25, //18
    -0.2, -0.7, -0.25, //19
    0.2, 0.6, -0.25, //20
    0.0, 0.6, -0.25, //21
    -0.33, -0.4, -0.25, //22
    -0.5, 0.0, -0.25, //23
    -0.7, 0.0, -0.25, //24
    -0.9, -0.4, -0.25, //25

    //Huruf L
    0.6, 0.6, 0.0, //26
    0.3, 0.6, 0.0, //27
    0.4, -0.7, 0.0, //28
    0.9, -0.7, 0.0, //29
    1.3, -0.7, 0.0, //30
    1.3, -0.3, 0.0, //31
    1.2, -0.45, 0.0, //32
    1.1, -0.55, 0.0, //33
    1.0, -0.6, 0.0, //34
    0.9, -0.6, 0.0, //35
    0.8, -0.6, 0.0, //36
    0.65, -0.5, 0.0, //37
    0.6, -0.35, 0.0, //38
    

    //3D
    //Huruf L
    0.6, 0.6, -0.25, //39
    0.3, 0.6, -0.25, //40
    0.4, -0.7, -0.25, //41
    0.9, -0.7, -0.25, //42
    1.3, -0.7, -0.25, //43
    1.3, -0.3, -0.25, //44
    1.2, -0.45, -0.25, //45
    1.1, -0.55, -0.25, //46
    1.0, -0.6, -0.25, //47
    0.9, -0.6, -0.25, //48
    0.8, -0.6, -0.25, //49
    0.65, -0.5, -0.25, //50
    0.6, -0.35, -0.25, //51
];

var triangles = [
    //Huruf W
    -1.2, 0.6, 0.0, -1.6, 0.6, 0.0, -1.0, -0.7, 0.0, -0.8, -0.7, 0.0,//0123
    -0.8, -0.7, 0.0, -0.5, 0.0, 0.0, -0.7, 0.0, 0.0, -0.9, -0.4, 0.0, //3101112
    -0.63, -0.3, 0.0, -0.4, -0.7, 0.0, -0.2, -0.7, 0.0, -0.5, 0.0, 0.0, //45610
    -0.2, -0.7, 0.0, 0.2, 0.6, 0.0, 0.0, 0.6, 0.0, -0.33, -0.4, 0.0, //6789

    
    //Belakang
    //Huruf W
    -1.2, 0.6, -0.25, -1.6, 0.6, -0.25, -1.0, -0.7, -0.25, -0.8, -0.7, -0.25,//0123
    -0.8, -0.7, -0.25, -0.5, 0.0, -0.25, -0.7, 0.0, -0.25, -0.9, -0.4, -0.25, //3101112
    -0.63, -0.3, -0.25, -0.4, -0.7, -0.25, -0.2, -0.7, -0.25, -0.5, 0.0, -0.25, //45610
    -0.2, -0.7, -0.25, 0.2, 0.6, -0.25, 0.0, 0.6, -0.25, -0.33, -0.4, -0.25, //6789
    
    //Huruf L
    0.3, 0.6, 0.0, 0.4, -0.7, 0.0, 0.6, -0.35, 0.0, 0.6, 0.6, 0.0, //26273738
    0.4, -0.7, 0.0, 0.65, -0.5, 0.0, 0.6, -0.35, 0.0, //283738
    0.4, -0.7, 0.0, 0.8, -0.6, 0.0, 0.65, -0.5, 0.0, //283637
    0.4, -0.7, 0.0, 0.9, -0.7, 0.0, 0.9, -0.6, 0.0, 0.8, -0.6, 0.0, //28293536
    0.9, -0.7, 0.0, 1.3, -0.7, 0.0, 1.0, -0.6, 0.0, 0.9, -0.6, 0.0, //29303435
    1.3, -0.7, 0.0, 1.1, -0.55, 0.0, .0, -0.6, 0.0, //303334
    1.3, -0.7, 0.0, 1.2, -0.45, 0.0, 1.1, -0.55, 0.0, //303233
    1.3, -0.7, 0.0, 1.3, -0.3, 0.0, 1.2, -0.45, 0.0, //303132

    //Belakang
    //Huruf L
    0.3, 0.6, -0.25, 0.4, -0.7, -0.25, 0.6, -0.35, -0.25, 0.6, 0.6, -0.25, //26273738
    0.4, -0.7, -0.25, 0.65, -0.5, -0.25, 0.6, -0.35, -0.25, //283738
    0.4, -0.7, -0.25, 0.8, -0.6, -0.25, 0.65, -0.5, -0.25, //283637
    0.4, -0.7, -0.25, 0.9, -0.7, -0.25, 0.9, -0.6, -0.25, 0.8, -0.6, -0.25, //28293536
    0.9, -0.7, -0.25, 1.3, -0.7, -0.25, 1.0, -0.6, -0.25, 0.9, -0.6, -0.25, //29303435
    1.3, -0.7, -0.25, 1.1, -0.55, -0.25, .0, -0.6, -0.25, //303334
    1.3, -0.7, -0.25, 1.2, -0.45, -0.25, 1.1, -0.55, -0.25, //303233
    1.3, -0.7, -0.25, 1.3, -0.3, -0.25, 1.2, -0.45, -0.25, //303132
];

var colors = [
   1,0,0, 1,0,0, 1,0,0, 1,0,0,
   0,1,0, 0,1,0, 0,1,0, 0,1,0,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   1,0,0, 1,0,0, 1,0,0, 1,0,0,
   0,1,0, 0,1,0, 0,1,0, 0,1,0,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   
];

var indices = [
    //Huruf W (TRIANGLES)
    0,1,2, 0,2,3,
    3,10,11, 3,11,12,
    4,5,6, 4,6,10,
    6,7,8, 6,8,9,

    //Huruf W (LINES)
    // 0,1, 1,2, 2,3, 3,4,
    // 4,5, 5,6, 6,7, 7,8,
    // 8,9, 9,10, 10,11, 11,12, 12,0,

    //Huruf L (TRIANGLES)
    26,27,28, 26,28,38,
    28,37,38, 28,36,37,
    28,29,35, 28,35,36,
    29,30,34, 29,34,35,
    30,33,34,
    
    //Huruf L (LINES)
    // 26,27, 27,28, 28,29, 
    // 29,30, 30,31, 31,32, 
    // 32,33,33,34, 34,35, 
    // 35,36, 36,37, 37,38, 38,26,

    //3D
    //Huruf W (TRIANGLES)
    13,14,15, 13,15,16,
    16,23,24, 16,24,25,
    17,18,19, 17,19,23,
    19,20,21, 19,21,22,
    30,32,33, 30,31,32,

    //Huruf W (LINES)
    // 13,14, 14,15, 15,16, 16,17,
    // 17,18, 18,19, 19,20, 20,21,
    // 21,22, 22,23, 23,24, 24,25, 25,13,

    //Huruf L (TRIANGLES)
    39,40,41, 39,41,51,
    41,50,51, 41,49,50,
    41,42,48, 41,48,49,
    42,43,47, 42,47,48,
    43,46,47, 43,45,46,
    43,44,45,
    
    //Huruf L (LINES)
    // 39,40, 40,41, 41,42, 42,43, 
    // 43,44,44,45, 45,46, 46,47, 
    // 47,48, 48,49, 49,50, 50,51, 51,39,


    //Gabungan
    //Huruf W (TRIANGLES)
    0,1,14, 0,14,13,
    1,2,15, 1,15,14,
    2,3,16, 2,16,15,
    3,4,17, 3,17,16,
    4,5,18, 4,18,17,
    5,6,19, 5,19,18,
    6,7,20, 6,20,19,
    7,8,21, 7,21,20,
    8,9,22, 8,22,21,
    9,10,23, 9,23,22,
    10,11,24, 10,24,23,
    11,12,25, 11, 25,24,
    12,0,13, 12,13,25,

    //Huruf W (LINES)
    // 0,13, 1,14, 
    // 2,15, 3,16,
    // 4,17, 
    // 5,18, 6,19, 
    // 7,20, 8,21,
    // 9,22,
    // 10,23, 11,24,
    // 12,25,
    
    //Huruf L (TRIANGLE)
    26,27,40, 26,40,39,
    27,28,41, 27,41,40,
    28,30,43, 28,43,41,
    30,31,44, 30,44,43,
    31,32,45, 31,45,44,
    32,33,46, 32,46,45,
    33,34,47, 33,47,46,
    34,35,48, 34,48,47,
    35,36,49, 35,49,48,
    36,37,50, 36,50,49,
    37,38,51, 37,51,50,
    38,26,39, 38,39,51,

    //Huruf L (LINES)
//    26,39, 27,40,
//    28,41, 30,43,
//    31,44, 32,45,
//    33,46, 34,47,
//    35,48, 36,49,
//    37,50, 38,51,

];