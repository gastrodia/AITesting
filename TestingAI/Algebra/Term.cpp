#include "Term.h"

namespace Algebra {
	Term::Term(Variable variable)
	{
		this->variables.push_back(variable.copy());
		this->coefficients.push_back(Fraction(1, 1));
	}


}