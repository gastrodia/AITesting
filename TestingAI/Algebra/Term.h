#pragma once
#include "Variable.h"
#include <vector>


namespace Algebra {
	class Term {
	public:
		Term(Variable variable);

		vector <Variable> variables;
		vector <Fraction> coefficients;
	};
}