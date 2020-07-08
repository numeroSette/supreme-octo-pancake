package servers

import (
	"app/src/pb"
	"context"
)

type User struct{}

func (*User) LoginUser(ctx context.Context, in *pb.LoginUserRequest) (*pb.LoginResponse, error) {

}
