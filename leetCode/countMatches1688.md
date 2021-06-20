# Count Matches Played 1688
You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.

 # Simplified
 - Binding for counter
 - While n > 1 --> n is initial number of teams played.
 - if even matches played = teams/2 and teams left = teams / 2
 - Else if number of teams is odd matches played += (n-1)/2 and teams left = (n-1)/2+1
 - return matchesPlayed
 
# Code


```
var numberOfMatches = function(n) {
    let matchesPlayed = 0;
    while(n > 1){
    if(n % 2 == 0){
        matchesPlayed += n/2
        n /= 2
    } else if(n % 2 != 0){
        matchesPlayed += (n-1)/2
        n = (n-1)/2 +1 
    }
  }
    return matchesPlayed
};
```