# Everything

This is the C4C monorepo containing all of our active projects.

Deployable units exist in `/apps`, inside each folder there is a README explaining how that unit is tested and deployed.

Business logic and supporting library for those deployable units exist in `/libs`. These are composable units of software that are not coupled to a specific deployment framework or strategy, and are meant to be easily reused in future projects.

The purpose of `README.md`s in this repository are to explain the usage of the application. The bare minimum you need to get it running. More detailed developer and public documentation exists on the wiki. `README.md`s will often link to relevant wiki pages.


Links to Project `README.md`

- [Monarch](./apps/monarch/README.md)
- [c4cneu.com](./apps/dotcom/README.md)


## 🔨 Development
1. Install Node v16.x
2. Clone this repo
3. `yarn install`

When adding new dependencies, use `yarn add` or its dev dependency equivalent. Thanks to Nx, each package will only be installed once, and each app knows how to bundle itself correctly based on its dependencies.
##------

##  Three things I would do to improve the quality of the codebase 
1. Testing. More testing would allow for better knowledge on the issues that may arise from the code. It also clarifies the expected inputs and outputs, so you can narrow down the intention of each function in your program. 
2. Documentation. Complete documentation would make it easier for others to read the code and be able to make changes faster in the future. 
3. Styling. I did not change class or variable names in this instance because of the simplicity of the program. However, if brought to a larger scale, or used for a different purpose. Class names and variable names could be more intuitive and descriptive. 

I implemented QR codes for each submitted link
