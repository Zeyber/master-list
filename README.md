# Master List

An organizational list that leverages third-party APIs and displays information in a simple list.

Sometimes managing so many tasks can become overwhelming (eg. emails, agenda, tasks, social media, communications across multiple platforms). It is easy lose track of what needs to be done, when and how much you really need to do.

Master List is an angular-based solution that can be viewed on a browser. It features connecting to APIs or feeds that can be configured to read relevant important information that a user may require.

*Node: There is a CLI version of the app [here](https://github.com/Zeyber/master-list-cli).*

## Applications

- Communications: Monitoring incoming messages, emails, chats, etc.
- Notifications: Monitoring generic notifications from applications.
- Analytics: Live monitoring analytical applications (eg. Google Analytics, AWS CloudWatch, etc).
- Agenda: Display relevant Calendar appointments.
- To Dos and Issue Tracking: Show tasks on To Do lists or assigned Github/Atlassian Issues.

### Example: Task list monitoring live data via feeds

Using Master List for tracking tasks, stats, messages and appointments on a Rasberry Pi Zero connected to a monitor.

![2022-04-20 21 05 47](https://user-images.githubusercontent.com/11735817/164304580-009d42ce-aa6a-40be-bf29-d6b7a01cf217.jpg)

## Installation

### Download and Install
- Clone with `git clone https://github.com/Zeyber/master-list`. or download from [Github](https://github.com/Zeyber/master-list).
- Install packages with `npm install`.

### Setup Feeds
Prepare you feeds that you want to show up in your list. You can create feeds and/or use pre-made feeds.

#### Creating a Feed
A feed is essentially a service that will return a GET response in JSON format:
```
{
  data: [
    {
      message: "[Message from John]: Hey buddy!"
    },
    {
      message: "[Message from Newbie]: Hello world!"
    }
  ]
}
```
It is up to the feed developer to host a service that delivers the required information via the endpoint. Please see the pre-made feeds below for some examples.

#### Pre-made Feeds
A list of feeds created by users for use with Master List.

- [Slack Unreads](https://github.com/Zeyber/master-list-slack-feed) - See which threads have unread messages.
- [Facebook Messenger Unreads](https://www.npmjs.com/package/@zeyber/master-list-facebook-provider) - See which contacts have unread messages.
- [Whatsapp Unreads](https://github.com/Zeyber/master-list-whatsapp-provider) - See which contacts have unread messages.
- [Microsoft Teams Unreads](https://github.com/Zeyber/master-list-microsoft-teams-feed) - See which contacts have unread messages.
- [Microsoft Outlook Unreads](https://github.com/Zeyber/master-list-microsoft-outlook-feed) - Check inbox for unread emails.
- [Github Issue Tracking](https://www.npmjs.com/package/@zeyber/master-list-github-provider) - See which open issues are currently assigned to you.
- [Google Gmail/Calendar/Tasks](https://www.npmjs.com/package/@zeyber/master-list-google-provider) - Check unread emails, upcoming events or due tasks.

#### Add your feed to `settings.json`
- Open `setup.json` in your editor.
- Add a feed's endpoint (and optionally an icon) to a given array like in the example below:
```
{
  "feeds": [
    "endpoint": "http://localhost:3000",
    "icon": "assets/my-icon.svg"
  ]
}
```

### Build and Run
- Build with `npm run build`.
- Run with `node dist/main.js`.

### Run in Development mode
- Start app with `npm start`.

## Usage
- Open a browser and go to the hosted url of the application (eg. `http://localhost:4200`).

### Enjoy!
