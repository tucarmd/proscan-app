#ifndef PLATFORMTYPE_H_
#define PLATFORMTYPE_H_
#ifndef true
#define true 1
#endif
#ifndef false
#define false 0
#endif


#if (ENABLE_ALIGN_MEMORY_U8 == 1 ) || (defined CORE_M0)
#define ARCH_PACKED __packed
#else
#define ARCH_PACKED
#endif

typedef unsigned char   ARCH_PACKED        uint8;
typedef signed char     ARCH_PACKED        sint8;
typedef unsigned short  ARCH_PACKED        uint16;
typedef signed short    ARCH_PACKED        sint16;
typedef unsigned int    ARCH_PACKED        uint32;
typedef signed int      ARCH_PACKED        sint32;
typedef uint8 const     ARCH_PACKED       ucint8;          
typedef char const              ROM_Str;
typedef ROM_Str **              pp_ROM_Str ;
typedef ROM_Str *              p_ROM_Str;
#ifdef _MSC_VER
typedef uint8 enumbool;
#define eFALSE 0
#define eTRUE 1
#else
typedef enum _enumbool{eFALSE=0,eTRUE=!eFALSE} enumbool;
#endif
typedef enum _enumState{eENABLE=1,eDISABLE=!eENABLE} enumState;
typedef enum _enumBusStatus{eLOW_LEVEL = 0,eHIGH_LEVEL=!eLOW_LEVEL} enumBusStatus;
typedef enum _enumLogicState{OFF=0,ON=1}enumLogicState;
typedef enum _enumLogicYesNoState{NO=0,YES=1}enumLogicYesNoState;
#ifndef Null
#define Null                    0
#endif
#ifndef null
#define null                    0
#endif
#ifndef Rom_Req
typedef uint8 const Rom_Req ;
typedef uint8 const*const pRom_Req ;
typedef const void * const  __ITEMSTRING ;
typedef __ITEMSTRING * __pITEMSTRING ;
#define FiveBauds_Addr_XX(a)   (a)
#define Hdr_XX(a)           (a)
#define Src_Addr_XX(a)  (a)
#define Tag_Addr_XX(a)  (a)
#define BR_Bps_XX(a)   (a)
#define BR_Kbps_XX(a)   (a##000)
#define Can_Addr_XX(a)   (0x##a)

#ifndef TIME_VAL_MS
#define TIME_VAL_MS(a)                              (a)
#endif

#ifndef TIME_VAL_US
#define TIME_VAL_US(a)                              (a)
#endif

#ifndef TIME_VAL_S
#define TIME_VAL_S(a)                               (TIME_VAL_MS(a*1000))
#endif

#endif
typedef void (*fFunction)(void);
#define countof(a)                      (sizeof(a)/sizeof(*(a)))
#ifdef _MSC_VER
typedef uint8 enumValidCode;
#define INVALID_CODE 0
#define VALID_CODE 0xAA
#else
typedef enum _enumValidCode
{
    INVALID_CODE =0,
    VALID_CODE = 0xAA
}enumValidCode;
#endif
#ifndef MIN
#define MIN(a,b) (a<b?a:b)
#endif

#ifndef MAX
#define MAX(a,b) (a>b?a:b)
#endif

#define Short2ByteLow(a)                ((uint8)(a))
#define Short2ByteHigh(a)               ((uint8)((a)>>8))
#define Int2ShortHigh(a)                ((uint16)(a>>16))
#define Int2ShortLow(a)                 ((uint16)(a&0xFFFF))
#define Int2Byte_x(a,x)                 ((uint8)(a>>(8*x)))
#define countof(a)                      (sizeof(a)/sizeof(*(a)))
#define CheckBit(ByteVal,BitPos)        ((ByteVal>>BitPos)&0x01 ? eTRUE:eFALSE)
#define __MAX_TYPE(a)   (2^(8*sizeof(a))-1)


#endif /*PLATFORMTYPE_H_*/
