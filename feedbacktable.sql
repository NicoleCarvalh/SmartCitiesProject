CREATE TABLE 'feedback'(
  `id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `feedback` varchar(1000) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO feedback(name,email,feedback) VALUES
('Natalia', 'nataliaakaleshi@gmail.com', 'PHP ÉELEGAL'),
('Jumbe.com', 'jumbe@gmail.com', 'AMO COMER PAO'),
('Junin', 'junin@gmail.com', 'O Fuleco é o mascote da Copa');
