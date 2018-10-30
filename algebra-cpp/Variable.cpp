#include "Variable.h"

namespace Algebra
{

	Variable::Variable(string variable) {
		this->variable = variable;
		this->degree = 1;
	}

	Variable Variable::copy() {
		auto copy = Variable(this->variable);
		copy.degree = this->degree;
		return copy;
	};
}

