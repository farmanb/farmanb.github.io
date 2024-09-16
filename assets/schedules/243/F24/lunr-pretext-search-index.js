var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule               September 2 September 6            9\/2  9\/3  9\/4  9\/5  9\/6               Three-Dimensional Coordinate Systems ( 12.1)  Vectors ( 12.2)          September 9 September 13            9\/9  9\/10  9\/11  9\/12  9\/13        The Dot Product ( 12.3)     The Cross Product ( 12.4)  Curves Defined by Parametric Equations ( 10.1)          September 16 September 20            9\/16  9\/17  9\/18  9\/19  9\/20        Equations of Lines and Planes ( 12.5)       Conic Sections ( 10.5)  Cylinders and Quadric Surfaces ( 12.6)          September 23 September 27            9\/23  9\/24  9\/25  9\/26  9\/27        Review        Exam 1           September 30 October 4            9\/30  10\/1  10\/2  10\/3  10\/4        Functions of Several Variables ( 14.1)  Limits and Continuity ( 14.2)       Double Integrals over Rectangles ( 15.1)  Iterated Integrals and Fubini’s Theorem ( 15.2)          October 7 October 11            10\/7  10\/8  10\/9  10\/10  10\/11        Polar Coordinates ( 10.3)  Double Integrals in Polar Coordinates ( 15.3)       Applications of Double Integrals ( 15.4)  Triple Integrals ( 15.6)          October 14 October 18            10\/14  10\/15  10\/16  10\/17  10\/18        Review        Exam 2           October 21 October 25            10\/21  10\/22  10\/23  10\/24  10\/25        Triple Integrals in Cylindrical Coordinates ( 15.7)       Triple Integrals in Spherical Coordinates ( 15.8)     Last day to drop courses or resign with W grades        October 28 November 1            10\/28  10\/29  10\/30  10\/31  11\/1        Vector Functions and Space Curves ( 13.1)  Derivatives & Integrals Of Vector Functions ( 13.2)       Arc Length and Curvature ( 13.3)  Motion in Space: Velocity and Acceleration ( 13.4)          November 4 November 8            11\/4  11\/5  11\/6  11\/7  11\/8        Review        Exam 3           November 11 November 15            11\/11  11\/12  11\/13  11\/14  11\/15        Review     Final Exam  7 PM  8 PM      Last Day of Classes             The instructor reserves the right to modify the schedule as needed.    "
},
{
  "id": "schedule-13-1",
  "level": "2",
  "url": "schedule.html#schedule-13-1",
  "type": "Warning",
  "number": "1.1",
  "title": "",
  "body": " The instructor reserves the right to modify the schedule as needed.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
