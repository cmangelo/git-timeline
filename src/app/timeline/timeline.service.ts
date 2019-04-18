import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
// Token: a99b52229f96fc32b5c6c0345c4df4f2ff2a7725
// Better token: ffc0c8cfa9a7aa990dbe9df14bf1e6fc9cfd86f5

const GET_USER = gql`query($username: String!) {
  user(login: $username) {
    id
    avatarUrl
    bio
    login
    name
    url
    repositories(first: 10, orderBy: { direction: ASC, field: CREATED_AT}) {
      nodes {
        id
        name
        url
        createdAt
      }
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private apollo: Apollo) { }

  getUser(username: string) {
    return this.apollo.query({
      query: GET_USER,
      variables: {
        username: username
      }
    });
  }
}
