#pragma once
// AlgebraDll.cpp : 定义 DLL 应用程序的导出函数。
//

#include "stdafx.h"


#include "stdafx.h"
#include <stdexcept>
#include "export.h"
#include <vector>
#include "Variable.h"
#include "Term.h"
using namespace std;

namespace Algebra
{

	



	class AlgebraDLL_API Equation {

	};

	AlgebraDLL_API Equation parse(string input);
	AlgebraDLL_API Equation toTex(string input);
}