#pragma once
#include <string>
using namespace std;

namespace Algebra
{

	class Variable {
	public:
		Variable(string variable);
		string variable;
		int degree;
		Variable copy();
	};
}
