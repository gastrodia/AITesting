#pragma once
// AlgebraDll.cpp : ���� DLL Ӧ�ó���ĵ���������
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