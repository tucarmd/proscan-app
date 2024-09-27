/*******************************************************************************
SoftUart.h
utility use to print data via usb port as uart protocol
version:1.0
@Author:Hung Vo
@Date: 24 Oct 2017
*******************************************************************************/
#ifndef _SOFTUART_H_
#define _SOFTUART_H_
/*
Return 
         -1  : Not available
         >-1 : Received Char
*/
int gf_SoftUart_getchar( void );
/*
Sent Character to uart
*/
void gf_SoftUart_putchar( int ch );
/*
Print string to uart
*/
void gf_SoftUart_printStr(char* str);
/*
@Hung Vo , Init 24 Oct 2017
USB DP : Uart TX
USB DM : Uart RX

{Baudrate : baudrate of uart 9600 , 115200 ....}
*/
void gf_SoftUart_Init(int Baudrate);
/*
@HungVo , 26 Oct 2017
@Deinit soft uart , disable interrupt function
*/
void gf_SoftUart_Close(void);
#endif
