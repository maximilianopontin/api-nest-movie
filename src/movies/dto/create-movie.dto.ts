import { IsString, IsNumber, Min, Max, IsUrl,Length, IsArray,ArrayContains} from "class-validator";

export class CreateMovieDto {

    @IsString()
    @Length(2,30)
    title: string;

    @IsNumber()
    @Min(1900)
    @Max(2100)
    año: number;

    @IsNumber()
    @Min(2)
    @Max(30)
    duration: number;

    @IsString()
    director: string;

    @IsString()
    @IsUrl()
    poster: string;


    @IsArray()
    genre: [];

    @IsNumber()
    @Min(0)
    @Max(10)
    rate: number;
}
