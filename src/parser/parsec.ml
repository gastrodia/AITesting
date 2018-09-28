
(* https://www.colabug.com/612864.html 简单的解析器实现 *)
type 'a parser_t = char list -> ('a * char list) option
let satisfy pred = function [] -> None | x::xs -> if pred x then Some(x,xs) else None;;
let range a b = satisfy (fun x -> x>=a && x <=b);;
let exactly x = satisfy ((=) x);;
let (<|>) p q = fun x -> match p x with Some _ as res -> res | None -> q x;;

let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) [];;


let (>>=) m f = fun l -> match m l with
| None -> None
| Some(res, l1) -> f res l1;;
let return x = fun l -> Some(x, l);;

let (=>) p q = p >>= fun r -> return (q r);;
let (>>) p q = p >>= fun _ -> q;;
let (<~>) x xs = x >>= fun r -> xs >>= fun rs -> return (r :: rs);;

let maybe x v = x <|> return v;;
let rec zom x = maybe (x >>= fun r -> (zom x) >>= fun rs -> return (r::rs)) [];;
let oom x = x <~> (zom x);;
let rec seq p = match p with
| x::xs -> x <~> (seq xs)
| [] -> return [];;
(* ------------ *)
let digit = range '0' '9';;
let lower = range 'a' 'z';;
let upper = range 'A' 'Z';;
let letter = lower <|> upper;;
let spaces = oom (exactly ' ');;
let token str = seq (List.map exactly (explode str)) >>= fun _ -> return str;;
let implode l =
  let res = String.create (List.length l) in
  let rec imp i = function
  | [] -> res
  | c :: l -> res.[i] <- c; imp (i + 1) l in
  imp 0 l;;
let name = spaces >> oom letter >>= fun r -> (zom (exactly ' ')) >> return (implode r);;

let test p str = p (explode str);;

test digit "23a";;
test letter "asd2";;
test (token "if" >>
       name       >>= fun n1 ->
       token "then" >>
       name       >>= fun n2 ->
       return (n1^n2)) "if xxx then yyy";;