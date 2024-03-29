# **Reviews Slider**

A simple React Project that focuses on the basics of react,especially the useEffect hook by building a slider version of a previous project, Reviews React.

## **Description**

A simple React Project that focuses on the basics of react,especially the useEffect hook by building a slider version of a previous project,Reviews React.The project is very similar to the Reviews React project,but this time with transitions based on conditional postions(prev,current,next) and an auto slider feature that deactivates itself when the user moves on to the next review,and reactivates itself after some time.

## **Getting Started**

### Dependencies

- Check package.json for details.
- Git
- Docker(if you want to test the project using Docker)

### Installing

```
git clone https://github.com/axense234/Slider-REACT.git
```

### Executing program

- **Using NPM**

```
npm install
npm start
```

- **Using Docker**

```
docker build -t slider-react:0.3.0 .
docker stop slider-react-app
docker rm slider-react-app
docker run -d -p 3000:3000 --name slider-react-app slider-react:0.3.0
```

## **Authors**

- **axense234**

## **Version History**

- 0.3
  - Analyzed the code to gather to-do's and changed a few things around.
- 0.2
  - Actually introduced the slider functionality with auto reviews
  - See [commit change](https://github.com/axense234/Slider-REACT/commits/master) or See [release history](https://github.com/axense234/Slider-REACT/releases)
- 0.1
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

## **Acknowledgments**

- Inspired by [_John Smilga 15 React Projects_](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=8s)
