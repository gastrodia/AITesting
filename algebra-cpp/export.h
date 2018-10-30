#include "stdafx.h"
#pragma once
#ifdef AlgebraDLL_EXPORTS
#define AlgebraDLL_API __declspec(dllexport) 
#else
#define AlgebraDLL_API __declspec(dllimport) 
#endif