import React, {Component} from 'react';
import styled from 'styled-components'
import colours from '../Colours'

const Social = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${colours.grey};
  &:hover {
      box-shadow: 0 2px 16px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
  }
  transition-duration: .4s;
  background-size: 16px auto;
  margin: 0px 10px;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
`

const Twitter = styled(Social)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTIyIiBoZWlnaHQ9Ijk5IiB2aWV3Qm94PSIwIDAgMTIyIDk5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMjEuNTY4IDExLjY5NWE0OS44NjkgNDkuODY5IDAgMCAxLTE0LjMyNSAzLjkyOGM1LjE1LTMuMDg3IDkuMTA0LTcuOTc1IDEwLjk2Ny0xMy43OTlhNDkuOTQ5IDQ5Ljk0OSAwIDAgMS0xNS44MzggNi4wNTJBMjQuOTEgMjQuOTEgMCAwIDAgODQuMTY3IDBDNzAuMzkyIDAgNTkuMjI1IDExLjE2NyA1OS4yMjUgMjQuOTRjMCAxLjk1NS4yMiAzLjg1OS42NDYgNS42ODQtMjAuNzI5LTEuMDQtMzkuMTA3LTEwLjk3LTUxLjQwOC0yNi4wNTlhMjQuODI0IDI0LjgyNCAwIDAgMC0zLjM3NyAxMi41NGMwIDguNjUyIDQuNDA0IDE2LjI4NiAxMS4wOTYgMjAuNzU5YTI0Ljg0MSAyNC44NDEgMCAwIDEtMTEuMjk3LTMuMTJjLS4wMDIuMTA0LS4wMDIuMjA5LS4wMDIuMzE0IDAgMTIuMDg0IDguNTk3IDIyLjE2NSAyMC4wMDcgMjQuNDU2YTI0Ljk3NSAyNC45NzUgMCAwIDEtMTEuMjY0LjQyN2MzLjE3NCA5LjkwOSAxMi4zODUgMTcuMTIgMjMuMjk5IDE3LjMyMUE1MC4wNDQgNTAuMDQ0IDAgMCAxIDUuOTUgODcuOTRjLTIuMDEzIDAtMy45OTktLjExOC01Ljk1LS4zNDggMTEuMDM4IDcuMDc2IDI0LjE0OCAxMS4yMDUgMzguMjMzIDExLjIwNSA0NS44NzUgMCA3MC45NjItMzguMDA1IDcwLjk2Mi03MC45NjNhNzEuOTIgNzEuOTIgMCAwIDAtLjA3Mi0zLjIyNyA1MC42OTIgNTAuNjkyIDAgMCAwIDEyLjQ0NS0xMi45MSIvPjwvc3ZnPg==);
`

const Instagram = styled(Social)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDBDMzYuNDIgMCAzNC43MTguMDU3IDI5LjM4NS4zYy01LjMyMi4yNDQtOC45NTcgMS4wOS0xMi4xMzcgMi4zMjUtMy4yODggMS4yNzgtNi4wNzYgMi45ODctOC44NTYgNS43NjctMi43OCAyLjc4LTQuNDkgNS41NjgtNS43NjcgOC44NTZDMS4zOSAyMC40MjguNTQ0IDI0LjA2My4zMDEgMjkuMzg1LjA1NyAzNC43MTggMCAzNi40MjEgMCA1MGMwIDEzLjU4LjA1NyAxNS4yODIuMyAyMC42MTUuMjQ0IDUuMzIyIDEuMDg5IDguOTU2IDIuMzI1IDEyLjEzNyAxLjI3OCAzLjI4OCAyLjk4NyA2LjA3NiA1Ljc2NyA4Ljg1NiAyLjc4IDIuNzggNS41NjggNC40OSA4Ljg1NiA1Ljc2NyAzLjE4IDEuMjM2IDYuODE1IDIuMDgxIDEyLjEzNyAyLjMyNCA1LjMzMy4yNDMgNy4wMzYuMzAxIDIwLjYxNS4zMDEgMTMuNTggMCAxNS4yODItLjA1OCAyMC42MTUtLjMgNS4zMjItLjI0NCA4Ljk1Ny0xLjA5IDEyLjEzNy0yLjMyNSAzLjI4OC0xLjI3OCA2LjA3Ni0yLjk4NyA4Ljg1Ni01Ljc2NyAyLjc4LTIuNzggNC40OS01LjU2OCA1Ljc2Ny04Ljg1NiAxLjIzNi0zLjE4IDIuMDgxLTYuODE1IDIuMzI0LTEyLjEzNy4yNDQtNS4zMzMuMzAxLTcuMDM2LjMwMS0yMC42MTUgMC0xMy41OC0uMDU3LTE1LjI4Mi0uMy0yMC42MTUtLjI0NC01LjMyMi0xLjA4OS04Ljk1Ni0yLjMyNS0xMi4xMzctMS4yNzgtMy4yODgtMi45ODctNi4wNzYtNS43NjctOC44NTYtMi43OC0yLjc4LTUuNTY4LTQuNDktOC44NTYtNS43NjdDNzkuNTcyIDEuMzg5IDc1LjkzNy41NDQgNzAuNjE1LjMgNjUuMjgyLjA1NyA2My41OCAwIDUwIDB6bTAgOS4wMDljMTMuMzUgMCAxNC45MzIuMDUgMjAuMjA0LjI5MSA0Ljg3NS4yMjMgNy41MjMgMS4wMzggOS4yODUgMS43MjIgMi4zMzQuOTA3IDQgMS45OSA1Ljc0OSAzLjc0IDEuNzUgMS43NSAyLjgzMyAzLjQxNSAzLjc0IDUuNzUuNjg0IDEuNzYxIDEuNSA0LjQwOSAxLjcyMiA5LjI4NC4yNCA1LjI3Mi4yOTEgNi44NTMuMjkxIDIwLjIwNCAwIDEzLjM1LS4wNSAxNC45MzItLjI5MSAyMC4yMDQtLjIyMyA0Ljg3NS0xLjAzOCA3LjUyMy0xLjcyMiA5LjI4NS0uOTA3IDIuMzMzLTEuOTkgMy45OTktMy43NCA1Ljc0OS0xLjc1IDEuNzUtMy40MTUgMi44MzMtNS43NSAzLjc0LTEuNzYxLjY4NC00LjQwOSAxLjUtOS4yODQgMS43MjEtNS4yNzEuMjQxLTYuODUyLjI5Mi0yMC4yMDQuMjkycy0xNC45MzMtLjA1LTIwLjIwNC0uMjkyYy00Ljg3NS0uMjIyLTcuNTIzLTEuMDM3LTkuMjg1LTEuNzIxLTIuMzMzLS45MDctNC0xLjk5LTUuNzQ5LTMuNzQtMS43NS0xLjc1LTIuODMzLTMuNDE2LTMuNzQtNS43NS0uNjg0LTEuNzYxLTEuNS00LjQwOS0xLjcyMi05LjI4NEM5LjA2IDY0LjkzMiA5LjAxIDYzLjM1MSA5LjAxIDUwYzAtMTMuMzUuMDUxLTE0LjkzMi4yOTEtMjAuMjA0LjIyMy00Ljg3NSAxLjAzOC03LjUyMyAxLjcyMi05LjI4NS45MDctMi4zMzQgMS45OS0zLjk5OSAzLjc0LTUuNzQ5IDEuNzUtMS43NSAzLjQxNi0yLjgzMyA1Ljc1LTMuNzQgMS43NjEtLjY4NCA0LjQwOS0xLjUgOS4yODQtMS43MjJDMzUuMDY4IDkuMDYgMzYuNjQ5IDkuMDEgNTAgOS4wMXptMCAxNS4zMTVDMzUuODIgMjQuMzI0IDI0LjMyNCAzNS44MiAyNC4zMjQgNTBjMCAxNC4xOCAxMS40OTYgMjUuNjc1IDI1LjY3NiAyNS42NzUgMTQuMTggMCAyNS42NzYtMTEuNDk1IDI1LjY3Ni0yNS42NzUgMC0xNC4xOC0xMS40OTYtMjUuNjc2LTI1LjY3Ni0yNS42NzZ6bTAgNDIuMzQzYy05LjIwNSAwLTE2LjY2Ny03LjQ2Mi0xNi42NjctMTYuNjY3IDAtOS4yMDUgNy40NjItMTYuNjY3IDE2LjY2Ny0xNi42NjcgOS4yMDUgMCAxNi42NjcgNy40NjIgMTYuNjY3IDE2LjY2NyAwIDkuMjA1LTcuNDYyIDE2LjY2Ny0xNi42NjcgMTYuNjY3ek04Mi42OSAyMy4zMWE2IDYgMCAxIDAtMTIgMCA2IDYgMCAwIDAgMTIgMHoiLz48L3N2Zz4=)
`

const Github = styled(Social)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwNSAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYzLjg3OSA5Ni42MzZWODIuNjhjMC0zLjQ5LS45OTctNi40OC0zLjQ4OS04Ljk3Mi45OTcgMCAzLjQ4OS0uNDk4IDYuNDgtLjk5NyA2Ljk3Ny0xLjQ5NSAxMS45Ni00Ljk4NCAxNC40NTMtMTAuNDY2IDIuOTktNS45OCAzLjQ4OS0xMi40NiAxLjk5NC0xOC45NGExNi42MzMgMTYuNjMzIDAgMCAwLTIuNDkzLTUuOThjLTEuNDk1LTEuNDk1LTEuOTkzLTIuNDkyLTEuNDk1LTIuOTkuOTk3LTMuNDkuOTk3LTcuNDc3LS40OTgtMTEuOTYyLS40OTktLjk5Ny0uOTk3LS45OTctMS40OTUtLjk5Ny0yLjk5IDAtNy40NzYgMS40OTUtMTIuNDYgNC40ODYtLjk5Ny40OTgtMS40OTYuNDk4LTEuNDk2LjQ5OGE1MC42MDkgNTAuNjA5IDAgMCAwLTI0LjQyMSAwYy0uNDk5IDAtLjk5NyAwLTEuNDk2LS40OTgtNC40ODUtMi40OTItNy45NzQtNC40ODYtMTAuOTY0LTQuNDg2LTEuNDk2LS40OTgtMS45OTQtLjQ5OC0yLjQ5MiAwLS40OTkuNDk4LS40OTkuOTk3LS45OTcgMS45OTQtLjk5NyAzLjk4Ny0uOTk3IDcuNDc2IDAgMTAuOTY0IDAgLjQ5OSAwIC45OTctLjQ5OS45OTctMy45ODcgNC45ODQtNS40ODIgMTAuOTY1LTQuNDg1IDE4LjQ0MSAxLjQ5NSA5Ljk2OCA2Ljk3NyAxNi40NDcgMTYuOTQ1IDE4Ljk0LjQ5OSAwIDIuNDkyLjQ5OCA2LjQ4IDEuNDk1LTEuNDk2IDEuNDk1LTIuNDkyIDMuNDg4LTIuOTkgNS45OCAwIC40OTktLjUuOTk3LS41Ljk5Ny02LjQ3OCAyLjQ5Mi0xMC45NjQuOTk3LTE0LjQ1My0zLjk4Ny0xLjk5My0yLjk5LTQuNDg1LTQuOTg0LTYuOTc3LTUuNDgyaC0yLjQ5MmMtLjk5NyAwLS45OTcuNDk4LS40OTkgMS40OTUuNDk5LjQ5OC45OTcuOTk3IDEuNDk1Ljk5NyAyLjQ5MiAxLjQ5NSA0LjQ4NiAzLjk4NyA1Ljk4MSA2Ljk3NyAxLjk5NCA0LjQ4NiA1LjQ4MyA2Ljk3OCAxMC45NjUgNy40NzYuNDk4IDAgMi45OSAwIDYuOTc4LS40OTh2OS40N2MwIC45OTYtLjQ5OSAxLjQ5NS0uOTk3IDEuOTkzLS45OTcuNDk5LTEuNDk1LjQ5OS0yLjQ5MiAwLTQuOTg0LTEuNDk1LTguOTcxLTMuNDg5LTEyLjQ2LTUuOThDNy4wNiA4Mi42OC0uOTE0IDY3LjcyNy4wODMgNDguNzg4Yy40OTktMTEuOTYyIDQuNDg2LTIxLjkzIDEyLjQ2LTMwLjlDMjAuNTE4IDguOTE2IDMwLjQ4NiAzLjQzMyA0My40NDQuOTQxYzEyLjk1OS0yLjQ5MiAyNC45MiAwIDM2LjM4NCA2Ljk3OCAxMS40NjMgNi45NzggMTkuNDM3IDE3LjQ0NCAyMi45MjYgMzAuNDAzIDMuNDg5IDEyLjk1OCAxLjk5NCAyNS40MTgtNC40ODUgMzcuMzgtNi40OCAxMS45NjItMTYuNDQ4IDE5LjkzNi0yOC45MDggMjMuOTIzLTMuOTg3LjQ5OS01LjQ4Mi0uNDk4LTUuNDgyLTIuOTl6Ii8+PC9zdmc+);
`

const Email = styled(Social)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEyNCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExMC43ODQuOThIMTIuNzQ1QzYuMDA1Ljk4LjU1MSA2LjQ5NS41NTEgMTMuMjM1bC0uMDYgNzMuNTNjMCA2Ljc0IDUuNTE0IDEyLjI1NSAxMi4yNTQgMTIuMjU1aDk4LjA0YzYuNzQgMCAxMi4yNTQtNS41MTUgMTIuMjU0LTEyLjI1NXYtNzMuNTNjMC02Ljc0LTUuNTE0LTEyLjI1NS0xMi4yNTUtMTIuMjU1em0wIDI0LjUxbC00OS4wMiAzMC42MzdMMTIuNzQ2IDI1LjQ5VjEzLjIzNWw0OS4wMiAzMC42MzggNDkuMDItMzAuNjM4VjI1LjQ5eiIvPjwvc3ZnPg==);
`

const Linkedin = styled(Social)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iOTkiIGhlaWdodD0iOTkiIHZpZXdCb3g9IjAgMCA5OSA5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIuNjE3IDk4LjkxNkgyLjIyNVYzMy4zOGgyMC4zOTJ2NjUuNTUtLjAxNHpNMTIuNDI0IDI0LjQwM0ExMS44MTMgMTEuODEzIDAgMSAxIDI0LjIzMSAxMi41OWExMS44MDYgMTEuODA2IDAgMCAxLTExLjgwNyAxMS44MTN6bTg2LjQ4NCA3NC41MTNINzguNTUxVjY3LjAzNGMwLTcuNjAzLS4xNTEtMTcuMzgzLTEwLjU5LTE3LjM4My0xMC41OTggMC0xMi4yMiA4LjI3Ni0xMi4yMiAxNi44MzNWOTguOTFIMzUuMzk5di02NS41M2gxOS41MjZ2OC45M2guMjgyYTIxLjQwOCAyMS40MDggMCAwIDEgMTkuMjc5LTEwLjU5MWMyMC42MDQgMCAyNC40MjMgMTMuNTcxIDI0LjQyMyAzMS4yM3YzNS45Njh6Ii8+PC9zdmc+);
`

const PageFoot = styled.div`
  background-color: ${colours.blue};
  display: flex;
  flex-direction: column;
  height: 15vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

export default class Foot extends Component {
  render() {
    return(
      <PageFoot>
        <div>
          <Email href="mailto:jordan@vlieg.ca" />
          <Linkedin href="https://www.linkedin.com/in/jordan-vlieg-0090296b/"/>
          <Github href="https://github.com/JordanVlieg"/>
          <Instagram href="https://instagram.com/JordanVlieg"/>
          <Twitter href="https://twitter.com/JordanVlieg"/>
        </div>
      </PageFoot>
    )
  }
}