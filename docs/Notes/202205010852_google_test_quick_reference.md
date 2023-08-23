# Google C++ Test Quick Reference

## Terminology Definition

```cpp
TEST(test_case_name, test_name) {
 ... test body ...
}
```
* `TEST()` is a marco
* There may be multiple _tests_ under one _test case_.

## Filters

* `./foo_test` Has no flag, and thus runs all its tests.
* `./foo_test --gtest_filter=*` Also runs everything, due to the single match-everything * value.
* `./foo_test --gtest_filter=FooTest.*` Runs everything in test case FooTest.
* `./foo_test --gtest_filter=*Null*:*Constructor*` Runs any test whose full name contains either "Null" or "Constructor".
* `./foo_test --gtest_filter=-*DeathTest.*` Runs all non-death tests.
* `./foo_test --gtest_filter=FooTest.*-FooTest.Bar` Runs everything in test case FooTest except FooTest.Bar. 