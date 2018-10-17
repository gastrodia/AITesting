#pragma once
#include "export.h"
#include <string>
#include <vector>
#include "Variable.h"
#include "Term.h"
#include "Fraction.h"
namespace Algebra {
	class AlgebraDLL_API Expression {
	public:
		Expression(string variable) {
			auto v = Variable(variable);
			auto t = Term(v);
			this->terms.push_back(t);
		}
		Expression(int variable) {


		}
		Expression subtract(int x) {

		}
		Expression add(string x) {

		}

		string toString() {

		}
		vector <Term> terms;
	private:
		vector <Fraction> constants;
	};
}