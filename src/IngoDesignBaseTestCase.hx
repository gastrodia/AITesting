import utest.Assert;
import ingodesignbase.*;

class IngoDesignBaseTestCase {
  var field : String;
  public function new() {};

  public function setup() {
    field = "some";
  }

  public function testFieldIsSome() {
    Assert.equals("some", field);
  }

  public function teardown() {
    field = null; // not really needed
  }

  public function testAddMethod(){
    Assert.equals(2,TestClass.Add(1, 1));
  }
}