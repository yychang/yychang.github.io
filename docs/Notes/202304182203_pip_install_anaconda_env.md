# Run pip to Install a Package to Anaconda Environment

## Context

User created a conda environment named `myenv` and tried to install a package named `<some_special_package>`. The package is not available in conda, and user has to install the package using `pip install <some_special_package>`. However, the package is then installed in the `base` environment in conda instead of the `myenv` environment.

## Problem

How to install the package in `myenv` environment using `pip`?

## Solution

Do the followings:

1. Install `pip` under `myenv` environment if it is not already available

    ```bash
    condat install -n myenv pip
    ```

2. Find the location of the `pip` in the `myenv` environment.
    1. If the root of Anaconda is `/path/to/anaconda`, the `pip` for `myenv` environment should be found at `/path/to/anaconda/envs/myenv/Scripts/pip`
3. Use the `pip` in the `myenv` environment to install the package

    ```bash
    /path/to/anaconda/envs/myenv/Scripts/pip install <some_special_package>
    ```

## See Also

* https://www.anaconda.com/blog/using-pip-in-a-conda-environment

## Reference

* https://stackoverflow.com/questions/41060382/using-pip-to-install-packages-to-anaconda-environment