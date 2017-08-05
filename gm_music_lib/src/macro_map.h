#ifndef MAP_H_INCLUDED
#define MAP_H_INCLUDED

#define MSVC_VA_ARGS_WORKAROUND(define, args) define args

#define CAT(a, ...) PRIMITIVE_CAT(a, __VA_ARGS__)
#define PRIMITIVE_CAT(a, ...) a ## __VA_ARGS__

#define IIF(c) PRIMITIVE_CAT(IIF_, c)
#define IIF_0(t, ...) __VA_ARGS__
#define IIF_1(t, ...) t

#define PROBE(x) x, 1 

#define CHECK(...) MSVC_VA_ARGS_WORKAROUND(CHECK_N, (__VA_ARGS__, 0))
#define CHECK_N(x, n, ...) n

#define IS_PAREN(x) CHECK(IS_PAREN_PROBE x)
#define IS_PAREN_PROBE(...) PROBE(~)

#endif

