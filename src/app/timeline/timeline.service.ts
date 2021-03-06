import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_USER = gql`query($username: String!) {
  user(login: $username) {
    id
    avatarUrl
    bio
    login
    name
    url
    repositories(last: 25, orderBy: { direction: DESC, field: CREATED_AT}) {
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
