# C++ Inheritance

Given 

```cpp
class A {
    public:
        int x;
    protected:
        int y;
    private:
        int z;
}
```

The accessibility of A's member variables from a derived class B is as follows:

|                         | `B::x`    | `B::y`    | `B::z` |
|-------------------------|-----------|-----------|--------|
| `class B : public A`    | public    | protected |   N/A  |
| `class B : protected A` | protected | protected |   N/A  |
| `class B : private A`   | private   | private   |   N/A  |

## Reference

* https://stackoverflow.com/questions/860339/what-is-the-difference-between-public-private-and-protected-inheritance-in-c