#pragma once
#include "export.h"

namespace Algebra {

	class AlgebraDLL_API Fraction {
	public:
		int number;
		int denom;

		Fraction(int a, int b) {
			this->number = a;
			this->denom = b;
		}
	};
}